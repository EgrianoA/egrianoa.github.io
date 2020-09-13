import { Row, Col } from 'antd'
import Slider from 'react-slick'
const section4mobile = (props) => {
    const assetPrefix = process.env.ASSET_PREFIX
    const redirect = (url) => {
        window.open(url)
    }
    const imgStyle = (imgUrl) => {
        return ({
            backgroundImage: `url(${assetPrefix}/assets/${imgUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        })

    }
    return (
        <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay
            className="slider-mobile">
            {props.content.map(content => {
                return (
                    <div>
                        <Row gutter={16}>
                            <Col span={24}>
                                <div className="imageSection" style={imgStyle(content.img)} />
                            </Col>
                            <Col span={24}>
                                <div className="sliderText">
                                    <p>{content.year}</p>
                                    <h4>{content.title}</h4>
                                    <span>
                                        <p className="desc">
                                            {content.desc}
                                        </p><a onClick={() => redirect(content.url)}>Detail</a></span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                )
            })}
        </Slider>
    )
}

export default section4mobile;