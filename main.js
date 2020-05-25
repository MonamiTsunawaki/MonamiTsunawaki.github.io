var _window = $(window),
    _header = $('#global-nav'),
    heroBottom;

_window.on('scroll',function(){     
    heroBottom = $('.image').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('m_fixed');   
    }
    else{
        _header.removeClass('m_fixed');
    }
});

_window.trigger('scroll');