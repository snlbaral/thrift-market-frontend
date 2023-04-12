import React from "react";
import { Link } from "react-router-dom";
import CartHover from "./CartHover";
import ProductsCardSkeleton from "./ProductsCardSkeleton";

function CarouselProductsCard({ products = [] }) {
  if (!products.length) return <ProductsCardSkeleton counts={4} />;

  return products.map((product) => {
    return (
      <div
        className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-4"
        key={product._id}
      >
        <div className="card border-0 newarrival-card">
          <figure className="product-image-container">
            <Link className="image-figure" to={`product-detail/${product._id}`}>
              <img
                className="image-figure-img"
                width="100%"
                height="100%"
                src={product.image}
                alt={product.name}
              />
            </Link>
            <CartHover product_id={product._id} />
          </figure>

          <div className="card-body pt-1 home-product">
            <div className="product-bottom-info">
              <Link to={`product-detail/${product._id}`}>
                <div className="product-bottom-info-thrifted">
                  <div className="pro-type-name d-flex justify-content-between">
                    <div className="product-name text-capitalize text-truncate ">
                      {product.name}
                    </div>
                    <div className="product-type">{product.type}</div>
                  </div>

                  <div className="brand-container-thrifted">
                    {product.brand_id ? (
                      <div className="brand-name text-capitalize">
                        {product.brand_id.name}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="price-container">
                  <span className="product-price">
                    <span className="currency">Rs.</span>
                    <strong>{product.price}</strong>
                  </span>
                  <div className="price-old-container">
                    <div className="price-old">
                      <span className="oldPrice">Rs.{product.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default CarouselProductsCard;
