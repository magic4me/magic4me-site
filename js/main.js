function googleTranslateElementInit() {
        new google.translate.TranslateElement(
            {pageLanguage: 'uk',
            autoDisplay: false,
            layout: google.translate.TranslateElement.InlineLayout.VERTICAL
            },
            'google_translate_element'
        );
}