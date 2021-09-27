<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <?php $menuItems = wp_get_nav_menu_items("main-menu"); ?>

    <nav>
        <?php $currentPageId = $wp_query->queried_object_id;
        foreach ($menuItems as $item) : ?>
            <a class="nav-link<?= $item->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $item->url; ?>">
                <?= $item->title; ?>
            </a>
        <?php endforeach; ?>
    </nav>
