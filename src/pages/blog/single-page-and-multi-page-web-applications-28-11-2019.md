---
templateKey: blog-post
title: SINGLE-PAGE AND MULTI-PAGE
title_span: WEB-APPLICATIONS
date: 2019-11-01T12:18:03.688Z
description: >-
  What are the differences between MPA, SPA and PWA and for which purposes they
  can be applied.
featuredimage: /assets/pwa-spa.jpg
---
There are three main approaches to web-application development: single-page (SPA), multi-page (MPA) and progressive (PWA). They stand out among other approaches by the simplicity of development, user friendliness and wide opportunities for business growth.

Comparative analysis of MPA, SPA and PWA approaches is given below.

## Single-page applications

SPA or Single Page Application is a one-page web application that loads onto a single HTML page. Thanks to dynamic updating by means of JavaScript, during use it is not necessary to reload or load additional pages. In practice, this means that the user sees all the main content in the browser, and when scrolling or navigating to other pages, instead of a full reload, the necessary elements are simply loaded.

In the process of work, user can think that he didn’t launch a website, but a desktop application, as it instantly responds to all his actions, without delays or “hangs”.

This effect can be achieved with the help of advanced JavaScript frameworks: Angular, React, Ember, Meteor, Knockout.

Examples of dynamic applications: Gmail, Google Maps, Facebok, GitHub, Meduza.

**Benefits**

* High speed - all resources are loaded in one session, and during the actions on the page, the data just changes, which saves a lot of time;
* Flexibility and responsiveness of the user interface - due to the fact that there is only one web page, it is easier to build a rich interface, store session information, manage presentation states and animations;
* Simplified development - you can start writing code from the file «file: // URL», without using a server, you do not need a separate code for rendering a page on the server side;
* Data caching - the application sends only one request, collects data, and after that it can function offline.

**Disadvantages**

* Seo optimization requires solutions in the form of server rendering - due to the fact that     content is loaded using AJAX technology, which implies a dynamic change in the content of a page, and stability is important for optimization;
* Load on the browser - due to the fact that the client frameworks are heavy, they load for a rather long time;
* JavaScript support is required - without JS you cannot fully use the full functionality of the application;
* Memory leak in Java Script - due to poor protection, SPA is more susceptible to malicious activity and memory leak.

## Multi-page application

MPA or Multi Page Application are multi-page applications that work in a traditional way. This means that with every minor data change or loading of new information, the page is updated. Such applications are heavier than single-page applications, so their use is only advisable in cases where you need to display a large amount of content.

**Benefits**

* Simple SEO optimization - you can optimize each of the pages of the application for the necessary key queries;
* Familiarity to users - due to a simple interface and classic navigation.

**Disadvantages**

* There is a close connection between the backend and the frontend, so they cannot be developed in parallel;
* Complex development - require the use of frameworks both on the client side and on the server side, which increases the development time and budget.

## SPA и MPA. Что выбрать?

When choosing the type of web application, you need to focus on why you are creating it. A multi-page website is suitable for an online store with a large number of goods and services, and if you, for example, have an infobusiness where you can present all the information in a compressed web space, a one-page website is suitable.

**Choose SPA**

It is advisable if:

* there is a need for a multifunctional, rich user interface;
* there is a need for an API - the use of ready-made blocks for building an application.

**Choose MPA**

It is advisable if:

* Applications are used only for reading information;
* There is a need to use the application in browsers without JavaScript support.

## Why do you need PWA?

Progressive Web Application interact with the user as an application. They can be installed on the main screen of the smartphone, send push notifications and work offline. Example: Google Docs.

**Benefits**

* Cross-platform - can work simultaneously with several operating systems;
* High speed and the ability to start and display data offline with instant loading;
* High installation speed;
* Rapid development - to create a PWA, you do not need a separate site, just change the existing one.

**Disadvantages**

Not all browsers support the basic functions of such applications (for example, Firefox and Edge).

## Conclusion

SPA and PWA are websites that are gradually displacing classic MPAs. This is due to the fact that they are easier to develop, work faster and like users. However, they have a weak point - SEO optimization. So far, not all browsers can work with them normally, therefore, to make such applications friendly for SEO, you need to resort to a number of tricks. MPA sites in this regard are simpler and more reliable.

Our CrisperSoft team specializes in the development and implementation of design projects of any complexity and is ready to offer our help - [write to us](http://crispersoft.com/contacts/), we will discuss your project.
