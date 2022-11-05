import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import "./product.css";
import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} datakey="Sales" title="Sales Perfomance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="data:image/png;base64,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"
              alt=""
              className="ProductInfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">6503</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <div className="productUpload">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="productUploadImg"
                />
                <label for="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
            </div>
            <button className="productButtton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
