CREATE DATABASE ProductDB;
CREATE TABLE product_detail(
    ProductID int NOT NULL AUTO_INCREMENT,
    ProductImage varchar(255),
    ProductCategory varchar(255),
    ProductName varchar(255),
    ProductDesc varchar(255),
    ProductPrice DEC(5,2),
    ProductColor1 INT,
    ProductColor2 INT,
    ProductColor3 INT,
)

UPDATE ProductID
SET ProductImage = 'Images/product/Bed_1.jpg'
SET ProductCategory = 'Bed'
SET ProductName = 'Chikaku'
SET ProductDesc = "It's firm yet soft."
SET ProductPrice = '40000'
SET ProductColor1 = '43443e'
SET ProductColor2 = '888275'
SET ProductColor3 IS NULL

