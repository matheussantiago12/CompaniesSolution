<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class CompanyTest extends TestCase
{
    /*
     * /api/companies [GET]
     */
    public function test_should_return_all_companies()
    {
        $this->get('/api/companies' ,[]);
        $this->seeStatusCode(200);
        $this->seeJsonStructure(
            [
                [
                    'id',
                    'name',
                    'score',
                    'created_at'
                ]
            ]
        );
    }

    /*
     * /api/company/{id} [GET]
     */
    public function test_should_return_company()
    {
        $this->get('/api/company/1' ,[]);
        $this->seeStatusCode(200);
        $this->seeJsonStructure(
            [
                'id',
                'name',
                'score',
                'created_at'
            ]
        );
    }

    /*
     * /api/company [POST]
     */
    public function test_should_create_company()
    {
        $parameters = [
            'name' => 'Nome para teste'
        ];

        $this->post('/api/company', $parameters, []);
        $this->seeStatusCode(200);
        $this->seeJsonStructure(
            [
                'id',
                'name',
                'created_at',
                'updated_at'
            ]
        );
    }
}
