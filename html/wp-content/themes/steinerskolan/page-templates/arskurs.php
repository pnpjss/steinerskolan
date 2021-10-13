<?php /* Template Name: Årskurs */
get_header(); ?>

<?php if (have_posts()) : ?>

    <?php while (have_posts()) : the_post(); ?>

        <?php the_content(); ?>

    <?php endwhile; ?>

<?php endif; ?>

<?php

$args = [
    'post_type' => 'arskurs',
    'order' => 'asc',
    'numberposts' => -1,
];
$arskurser = get_posts($args);
?>

<?php if (count($arskurser)) : ?>
    <div class="container">
        <div class="content-link-container">
            <aside>
                <h3>Innehåll</h3>
                <ul>
                    <?php foreach ($arskurser as $post) : setup_postdata($post); ?>
                        <?php $title = str_replace(' ', '', get_the_title()); ?>
                        <li>
                            <a href="#<?= $title; ?>"><?php the_title(); ?> </a>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </aside>
        </div>
        <?php foreach ($arskurser as $post) : setup_postdata($post); ?>
            <?php the_content(); ?>
        <?php endforeach; ?>
    </div>
<?php endif; ?>
<?php get_footer(); ?>