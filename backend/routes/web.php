<?php

/*
 * Companies
 */
$router->get('/api/companies', "CompanyController@getAll");

$router->get('/api/company/{id}', "CompanyController@get");
$router->post('/api/company', "CompanyController@store");

/*
 * Declarations
 */
$router->get('/api/declarations/{id}', 'DeclarationController@get');
$router->post('/api/declaration', 'DeclarationController@upload');


$router->get('/', function () use ($router) {
    return $router->app->version();
});
