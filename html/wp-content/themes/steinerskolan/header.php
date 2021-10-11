<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <?php $menuItems = wp_get_nav_menu_items("Main menu"); ?>

    <nav class="nav-container" id="nav-container">
        <div class="logo-container">
            <img src="/wp-content/uploads/Rudolf_Steinerskolan_Logotyp.png" alt="Logo" class="logo">
        </div>
        <div class="link-container">
            <?php $currentPageId = $wp_query->queried_object_id;
            foreach ($menuItems as $item) : ?>
                <a class="nav-link<?= $item->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $item->url; ?>">
                    <?= $item->title; ?>
                </a>
            <?php endforeach; ?>
        </div>
        <div class="search-container">
            <div class="stylish-line">|</div>
            <form action="#" class="search-box">
                <button type="submit"><img src="/wp-content/uploads/icons8-search.svg" alt="search"></button>
                <input type="text" name="search">
            </form>
        </div>
        <button class="toggle-search"><img src="/wp-content/uploads/icons8-search.svg" alt=""></button>
        <button class="toggle-nav"><img src="/wp-content/uploads/menu.png" alt=""></button>
        
    </nav>
    <aside>
        <form action="#" class="search-box">    
            <button type="submit"><img src="/wp-content/uploads/icons8-search.svg" alt="search"></button>
            <input type="text" name="search">
        </form>
    </aside>
    <section>
        <?php $currentPageId = $wp_query->queried_object_id;
        foreach ($menuItems as $item) : ?>
            <a class="nav-link<?= $item->object_id == $currentPageId ? ' active' : '' ?>" href="<?= $item->url; ?>">
                <?= $item->title; ?>
            </a>
        <?php endforeach; ?>
    </section>
