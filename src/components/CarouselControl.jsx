import React, { Component } from 'react'

export default class CarouselControl extends Component {
    render() {
        return (
            <>
                <a
                  href="#carousel"
                  class="carousel-control-prev"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a
                  href="#carousel"
                  class="carousel-control-next"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon"></span>
                </a>
            </>
        )
    }
}
