/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/posts              ->  index
 * GET     /api/posts/active       ->  index of published posts      
 * POST    /api/posts              ->  create
 * GET     /api/posts/:id          ->  show
 * PUT     /api/posts/:id          ->  update
 * DELETE  /api/posts/:id          ->  destroy
 */

//COMMENTS
/**
  * GET     /api/posts/comments/:id           ->  index of comments in post
  * POST    /api/posts/comments/             -> post a new comment by post id
 */

'use strict';

import _ from 'lodash';
import Post from './post.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Posts
export function index(req, res) {
  return Post.find().sort({posted: -1}).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a list of active Posts
export function indexActive(req, res) {
  return Post.find({active: true}).sort({posted: -1}).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Post from the DB
export function show(req, res) {
  return Post.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Post in the DB
export function create(req, res) {
  return Post.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Post in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Post.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Post from the DB
export function destroy(req, res) {
  return Post.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}


// COMMENTS

export function postNewComment(req, res) {
   Post.update({_id: req.body.postid}, {$push: {comments: {username: req.body.username, body: req.body.body, img: req.body.img}}}, function (err, comment) {
     if(err) console.log('ERROR')

     res.status(200).jsonp(comment); 
   })
}

export function getComments(req,res) {
   Post.findById(req.params.id, function (err, articulo) {
    if(err) res.status(500).send(err);

    console.log('GET /articulos/' + req.params.id);
        res.status(200).jsonp(articulo.comments);
   }); 
};