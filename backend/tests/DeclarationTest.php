<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;

class DeclarationTest extends TestCase
{
    /*
     * /api/declarations/{id} [GET]
     */
    public function test_should_return_all_declarations_by_company_id()
    {
        $this->get('/api/declarations/1' ,[]);
        $this->seeStatusCode(200);
        $this->seeJsonStructure(
            [
                [
                    'declarations_id',
                    'date',
                    'type',
                    'company_id'
                ]
            ]
        );
    }
}
