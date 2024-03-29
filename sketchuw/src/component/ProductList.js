import React from 'react';
import './ProductList.css'; // นำเข้าไฟล์ CSS ที่มีการแก้ไขแล้ว

const ProductList = () => {
    return (
        <div className="product-list"> {/* เพิ่ม className เพื่อใช้สไตล์ CSS สำหรับ ProductList */}
            <ul>
            <li>
            <a href="#">
                <img src="https://static.nike.com/a/images/t_default/01c389c1-2186-4502-8894-ba4ac6de6de4/%E0%B8%96%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%99%E0%B8%99%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%A1%E0%B8%82%E0%B9%89%E0%B8%AD-everyday-plus-cushioned-h3Pq0p.png" alt="Product Name" />
                    <div>
                        <h3>ถุงเท้าเทรนนิ่งหุ้มข้อ Nike Everyday Plus Cushioned</h3>
                        <p>Description of the product goes here.</p>
                        <p>Price: ฿3,190.00</p>
                    </div>
                    </a>
                </li>
                <li>
                <a href="#">
                    <img src="https://d2cva83hdk3bwc.cloudfront.net/adidas-samba-classic-cloud-white-1.jpg" alt="Product Name" />
                    <div>
                        <h3>adidas Samba OG Cloud White Core Black</h3>
                        <p>Description of the product goes here.</p>
                        <p>Price: ฿3,190.00</p>
                    </div>
                    </a>
                </li>
                {/* Add more <li> items for additional products */}
                <li>
                <a href="#">
                    <img src="https://d2cva83hdk3bwc.cloudfront.net/nike-dunk-low-retro-white-polar-blue-1.jpg" alt="Product Name" />
                    <div>
                        <h3>Nike Dunk Low Retro White Polar Blue</h3>
                        <p>Description of the product goes here.</p>
                        <p>Price: ฿3,190.00฿</p>
                    </div>
                    </a>
                </li>
                <li>
                <a href="#">
                    <img src="https://d2cva83hdk3bwc.cloudfront.net/converse-run-star-hike-hi-black-white-gum-1.jpg" alt="Product Name" />
                    <div>
                        <h3>Converse Run Star Hike Hi Black White Gum</h3>
                        <p>Description of the product goes here.</p>
                        <p>Price: ฿3,190.00</p>
                    </div>
                    </a>
                </li>
                <li>
                <a href="#">
                    <img src="https://d2cva83hdk3bwc.cloudfront.net/nike-nsw-futura-365-faux-fur-crossbody-bag-1l-black-1.jpg" alt="Product Name" />
                    <div>
                        <h3>Nike NSW Futura 365 Faux Fur Crossbody Bag 1L Black</h3>
                        <p>Description of the product goes here.</p>
                        <p>Price: ฿3,190.00</p>
                    </div>
                    </a>
                </li>
                {/* Add more <li> items for additional products */}
            </ul>
        </div>
    );
};

export default ProductList;
