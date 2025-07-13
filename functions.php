<?php

function j0w0_gulp_enqueue_scripts() {
    wp_enqueue_style('j0w0-gulp-style', get_template_directory_uri() . '/dist/css/style.min.css', [], '1.0');
    wp_enqueue_script('j0w0-gulp-script', get_template_directory_uri() . '/dist/js/main.js', [], '1.0', true);
}
add_action('wp_enqueue_scripts', 'j0w0_gulp_enqueue_scripts');
