<?php
require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

function export()
{
    $dataJp = file_get_contents('./ja.json');
    $dataEn = file_get_contents('./en.json');
    $dataJpArr = json_decode($dataJp, true);
    $dataEnArr = json_decode($dataEn, true);
    $newArrJp = array();
    $newArrEn = array();
    foreach ($dataJpArr as $key => $val) {
        if (is_array($val)) {
            foreach ($val as $key_2 => $val_2) {
                if (is_array($val_2)) {
                    foreach ($val_2 as $key_3 => $val_3) {
                        $newArrJp[$key . '__' . $key_2 . '__' . $key_3] = $val_3;
                    }
                } else {
                    $newArrJp[$key . '__' . $key_2] = $val_2;
                }
            }
        } else {
            $newArrJp[$key] = $val;
        }
    }
    foreach ($dataEnArr as $key => $val) {
        if (is_array($val)) {
            foreach ($val as $key_2 => $val_2) {
                if (is_array($val_2)) {
                    foreach ($val_2 as $key_3 => $val_3) {
                        $newArrEn[$key . '__' . $key_2 . '__' . $key_3] = $val_3;
                    }
                } else {
                    $newArrEn[$key . '__' . $key_2] = $val_2;
                }
            }
        } else {
            $newArrEn[$key] = $val;
        }
    }
    $spreadsheet = new Spreadsheet();
    $sheet = $spreadsheet->getActiveSheet();
    $sheet->setCellValue('A1', 'Key');
    $sheet->setCellValue('B1', 'JP');
    $sheet->setCellValue('C1', 'EN');

    $row = 2;
    $keys = [];

    foreach ($newArrJp as $key => $val) {
        $sheet->setCellValue('A' . $row, $key);
        $sheet->setCellValue('B' . $row, $val);
        $keys[] = $key;
        $row++;
    }
    foreach ($keys as $k => $v) {
        foreach ($newArrEn as $key => $val) {
            if ($v == $key) {
                $sheet->setCellValue('C' . $k + 2, $val);
            }
        }
    }
    $writer = new Xlsx($spreadsheet);
    $writer->save('./file_excel/file.xlsx');
}
export();