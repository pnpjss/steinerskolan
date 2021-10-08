<?php

declare(strict_types=1);

add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('menus');
    add_theme_support('post-thumbnails');
});

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('style', get_theme_file_uri('assets/app.css'));
});

