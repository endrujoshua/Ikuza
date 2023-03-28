CREATE DATABASE Product_db
CREATE TABLE category(
    CategoryID int NOT NULL AUTO_INCREMENT,
    CategoryName varchar(255)
)
CREATE TABLE product_detail(
    ProductID int NOT NULL AUTO_INCREMENT,
    ProductImage varchar(255),
    CategoryID int,
    ProductName varchar(255),
    ProductDesc varchar(255),
    ProductPrice varchar(255),
    PRIMARY KEY (ProductID),
    FOREIGN KEY (CategoryID) REFERENCES category(CategoryID)
)
CREATE TABLE colour(
    ColourID int NOT NULL AUTO_INCREMENT,
    ColourHash varchar(255),
    ColourName varchar(255)
)

CREATE TABLE colour_product{
    ProductID int NOT NULL,
    ColourID int NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES product_detail(ProductID),
    FOREIGN KEY (ColourID) REFERENCES colour(ColourID)
}
Select * from *