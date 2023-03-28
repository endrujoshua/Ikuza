CREATE DATABASE ProductDB;
CREATE TABLE product_detail(
    ProductID int NOT NULL AUTO_INCREMENT,
    ProductImage varchar(255),
    ProductCategory varchar(255),
    ProductName varchar(255),
    ProductDesc varchar(255),
    ProductPrice varchar(255),
    ProductColor1 varchar(255),
    ProductColor2 varchar(255),
    ProductColor3 varchar(255),
)

UPDATE ProductID
SET ProductImage = 'Images/product/Bed_1.jpg'
SET ProductName = 'Chikaku'
SET ProductDesc = "It's firm yet soft."
SET ProductPrice = '¥40000'

