const Article = require('../model/Article');
const { validateArticle } = require('../helper/validate');
const fs = require('fs');
const path = require('path')

const test = (req, res) => {
  return res.status(200).json({
    message: "Test in the article control.",
  });
};

const createArticle = (req, res) => {
  //* Get data (post) from the user.
  let params = req.body;

  //* Validate data
  try {
    validateArticle(params);
  } catch (error) {
    return res.status(400).json({
      status: error,
      message: "Missing data from the form",
    });
  }

  //* Create object and Assign object base in the model (manual or automatic).
  //* We send all data inside the model.
  const article = new Article(params);

  //* Save the article in the data base
  article.save((error, articleSaved) => {
    if (error || !article) {
      return res.status(400).json({
        status: error,
        message: "Article was not saved in the database",
      });
    }
    //* Return result.
    return res.status(200).json({
      status: "Success",
      article: articleSaved,
      message: "Article saved successfuly",
    });
  });
};

const getArticles = (req, res) => {
  let query = Article.find({});

  if (req.params.latest) {
    query.limit(3);
  }

  query.sort({ date: -1 }).exec((error, articles) => {
    if (error || !articles) {
      return res.status(404).json({
        status: "Error",
        message: "Articles not found",
      });
    }
    return res.status(200).json({
      status: "Success",
      paramUrl: req.params.latest,
      counter: articles.length,
      articles,
    });
  });
};

const getArticle = (req, res) => {
  //* Get an ID from the url
  const id = req.params.id;
  //* Find the article
  Article.findById(id, (error, article) => {
    if (error || !article) {
      return res.status(404).json({
        status: "Error",
        message: "Article not found",
      });
    }
    return res.status(200).json({
      status: "Success",
      message: "Articles found on the database",
      article,
    });
  });
};

const deleteArticle = (req, res) => {
  const id = req.params.id;

  Article.findByIdAndDelete({ _id: id }, (error, article) => {
    if (error || !article) {
      return res.status(404).json({
        status: "Error",
        message: "Article not found",
      });
    }
    return res.status(200).json({
      status: "Success",
      message: "Article deleted",
      article,
    });
  });
};

const updateArticle = (req, res) => {
  //* Get ID
  const id = req.params.id;

  //* Get data from the form body
  let params = req.body;

  //* Validate data
  try {
    validateArticle(params);
  } catch (error) {
    return res.status(400).json({
      status: error,
      message: "Missing data from the form",
    });
  }

  //* Find, Update article and return
  Article.findOneAndUpdate(
    { _id: id },
    params,
    { new: true },
    (error, article) => {
      if (error || !article) {
        return res.status(404).json({
          status: "Error",
          message: "Article not found",
        });
      }
      return res.status(200).json({
        status: "Success",
        message: "Article updated",
        article,
      });
    }
  );
};

const uploadImage = (req, res) => {
    //* Set multer

    //* Get the image and validate
    if (!req.file && !req.files) {
        return res.status(400).json({
        status: "Error",
        message: "Wrong Request.",
        });
    }

    //* Get the file name
    let fileName = req.file.originalname;

    //* Get the type file
    let fileType = fileName.split(".");
    let fileExtension = fileType[1];

    //* Check the type
    if (
        fileExtension != "png" &&
        fileExtension != "jpg" &&
        fileExtension != "jpeg" &&
        fileExtension != "gif"
    ) {
        //* Delete files and return response
        fs.unlink(req.file.path, (error) => {
        return res.status(400).json({
            status: "Error",
            message: "Image is not valid.",
        });
        });
    } else {
        //* Update the article, and return response.
        //* Get ID
        const id = req.params.id;

        //* Find, Update article and return
        Article.findOneAndUpdate(
            { _id: id },
            { image: req.file.filename },
            { new: true },
            (error, article) => {
                if (error || !article) {
                    return res.status(404).json({
                        status: "Error",
                        message: "Article not found",
                    });
                }
                return res.status(200).json({
                    status: "Success",
                    message: "Article updated",
                    article: article,
                    file: req.file,
                });
            }
        );
    }
};

const images = (req, res) => {
    let file = req.params.file;
    let pathOnDisk = './images/articles/' + file;
    fs.stat(pathOnDisk, (error, exist) => {
        if(exist) {
            return res.sendFile(path.resolve(pathOnDisk));
        } else {
            return res.status(404).json({
                status: 'Error',
                message: 'Image not found'
            })
        }
    })
}

const searchArticle = (req, res) => {
    //* Get the string from the url
    const search = req.params.search;
    //* Find OR
    Article.find({ '$or': [
        {'title': { '$regex': search, '$options': 'i' }},
        {'content': { '$regex': search, '$options': 'i' }}
    ]})
    .sort({date: -1})
    .exec((error, articles) => {
        if (error || !articles || articles.length <= 0) {
            return res.status(404).json({
                status: "Error",
                message: "Article(s) not found",
            });
        }
        return res.status(200).json({
            status: "Success",
            message: "Article(s) found",
            articles: articles
        });
    })
}

module.exports = {
  test,
  createArticle,
  getArticles,
  getArticle,
  deleteArticle,
  updateArticle,
  uploadImage,
  images, 
  searchArticle
};
