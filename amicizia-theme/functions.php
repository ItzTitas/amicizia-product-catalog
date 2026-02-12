<?php
function amicizia_theme_setup() {
    // Add support for core block themes
    add_theme_support( 'wp-block-styles' );

    // Enqueue styles and scripts
    function amicizia_enqueue_scripts() {
        wp_enqueue_style( 'amicizia-style', get_stylesheet_uri(), array(), '1.0' );
        wp_enqueue_script( 'amicizia-script', get_template_directory_uri() . '/js/script.js', array('jquery'), '1.0', true );
    }
    add_action( 'wp_enqueue_scripts', 'amicizia_enqueue_scripts' );
}
add_action( 'after_setup_theme', 'amicizia_theme_setup' );
?>