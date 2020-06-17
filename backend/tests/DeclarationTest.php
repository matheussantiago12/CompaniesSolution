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

    public function aa()
    {
        $uploadedFile = new UploadedFile(__DIR__ . '/files/teste.csv', 'teste.csv', null, null, true);

        $this->post('/api/declaration', ['declaration' => $uploadedFile]);

//        Storage::fake('uploads');
//
//        $header = 'date,company_id,type';
//        $row1 = '2020-05-05,1,0';
//        $row2 = '2020-05-05,1,0';
//        $row3 = '2020-05-05,1,1';
//
//        $content = implode("\n", [$header, $row1, $row2, $row3]);
//
//        $inputs = [
//            'declaration' =>
//                UploadedFile::
//                fake()->
//                createWithContent(
//                    'test.csv',
//                    $content
//                )
//        ];
//
//        $this->post('api/declaration', ['declaration' => $inputs], []);
    }

    public function testShouldCreateDeclaration()
    {
        // Fake any disk here
        Storage::fake('local');

        $filePath='/files/teste.csv';

        // Create file
        file_put_contents($filePath, "date,company_id,type\n2020-01-01,1,0");

        $this->post('/api/declaration', [
            'declaration' => new UploadedFile($filePath,'test.csv', null, null, true),
        ]);
    }

    public function agoraVai()
    {
        $file = $this->getFile(base_path("tests/files/teste.csv"));

        $this->post('/api/declaration', [
            'declaration' => $file
        ], []);
    }

    protected function getFile($file)
    {
        $dummy = file_get_contents($file);

        file_put_contents(base_path("tests/files/" . basename($file)), $dummy);

        $path = base_path("tests/files/" . basename($file));
        $original_name = 'teste.csv';
        $mime_type = 'text/csv';
        $error = null;
        $test = true;

        $file = new UploadedFile($path, $original_name, $mime_type, $error, $test);

        return $file;
    }
}
