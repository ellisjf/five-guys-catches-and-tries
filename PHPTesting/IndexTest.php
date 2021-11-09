<?php

class IndexTest extends \PHPUnit\Framework\TestCase
{

    public function testSortByRating()
    {
        $rating1 = '10';
        $rating2 = null;
        $this->assertSame(rating1, rating2);
    }
}