var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('api-description', {
    title: 'API',
    group_list: [
      {
        name: 'Common',
        list: [
          {
            url: '/',
            method: 'GET',
            description: 'server root'
          },
          {
            url: '/api',
            method: 'GET',
            description: 'api description page'
          }
        ]
      },
      {
        name: 'Users',
        list: [
          {
            url: '/api/users',
            method: 'GET',
            description: 'example data'
          }
        ]
      }
    ]
  });
});

module.exports = router;