<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?> | <?php is_front_page() ? bloginfo('description') : wp_title(''); ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="site-header">
    <nav>
        <div class="logo">
            <a href="<?php echo home_url(); ?>">Amicizia Life Sciences</a>
        </div>
        <ul class="main-menu">
            <li class="menu-item"><a href="#home">Home</a></li>
            <li class="menu-item dropdown">
                <a href="#">Products ▼</a>
                <ul class="dropdown-menu">
                    <li><a href="#">Poultry Products</a></li>
                    <li><a href="#">Livestock Products</a></li>
                    <li><a href="#">Aqua Culture Products</a></li>
                </ul>
            </li>
            <li class="menu-item dropdown">
                <a href="#">About Us ▼</a>
                <ul class="dropdown-menu">
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#mission">Our Mission</a></li>
                    <li><a href="#vision">Our Vision</a></li>
                    <li><a href="#team">Team</a></li>
                </ul>
            </li>
            <li class="menu-item"><a href="#contact-us">Contact Us</a></li>
        </ul>
    </nav>
</header>