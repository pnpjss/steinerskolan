<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <?php $menuItems = wp_get_nav_menu_items("Navigation menu"); ?>

    <nav class="nav-container">
        <div class="logo"><img src="/wp-content/uploads/steinerskolan-logo.jpg" alt="Logo"></div>
        <div>
        <?php $currentPageId = $wp_query->queried_object_id;
        foreach ($menuItems as $item) : ?>
            <a class="nav-link<?= $item->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $item->url; ?>">
                <?= $item->title; ?>
            </a>
        <?php endforeach; ?>
        </div>
        <div class="search-container">
            <div class="stylish-line">|</div>
            <div class="search-box">SEARCH</div>
        </div>
    </nav>
