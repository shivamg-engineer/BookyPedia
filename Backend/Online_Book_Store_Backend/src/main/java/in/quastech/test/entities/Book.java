package in.quastech.test.entities;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;


@Entity
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String name;
	@Column
	private String author;
	@Column
	private String publisher;
	@DateTimeFormat
	private LocalDate dateOfPublish;
	@Column
	private String category;
	@Column(columnDefinition = "TEXT")
	private String Description;

	@Column
	private double price;

	@Column
	private String imagePath; // e.g., "images/book1.jpg"
	
	@Min(0)
	@Max(5)
	@Column
	private double ratings;
	@Column
	private int pages;
	@Column
	private String language;
	@Column
	private String pdfPath; // e.g., "/uploads/pdfs/book1.pdf"
	
	
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Book(int id, String name, String author, String publisher, LocalDate dateOfPublish, String category,
			String description, double price, String imagePath, @Min(1) @Max(5) double ratings, int pages,
			String language, String pdfPath) {
		super();
		this.id = id;
		this.name = name;
		this.author = author;
		this.publisher = publisher;
		this.dateOfPublish = dateOfPublish;
		this.category = category;
		Description = description;
		this.price = price;
		this.imagePath = imagePath;
		this.ratings = ratings;
		this.pages = pages;
		this.language = language;
		this.pdfPath = pdfPath;
	}
	public Book(String name, String author, String publisher, LocalDate dateOfPublish, String category,
			String description, double price, String imagePath, @Min(1) @Max(5) double ratings, int pages,
			String language, String pdfPath) {
		super();
		this.name = name;
		this.author = author;
		this.publisher = publisher;
		this.dateOfPublish = dateOfPublish;
		this.category = category;
		Description = description;
		this.price = price;
		this.imagePath = imagePath;
		this.ratings = ratings;
		this.pages = pages;
		this.language = language;
		this.pdfPath = pdfPath;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public LocalDate getDateOfPublish() {
		return dateOfPublish;
	}
	public void setDateOfPublish(LocalDate dateOfPublish) {
		this.dateOfPublish = dateOfPublish;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getImagePath() {
		return imagePath;
	}
	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	public double getRatings() {
		return ratings;
	}
	public void setRatings(double ratings) {
		this.ratings = ratings;
	}
	public int getPages() {
		return pages;
	}
	public void setPages(int pages) {
		this.pages = pages;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getPdfPath() {
		return pdfPath;
	}
	public void setPdfPath(String pdfPath) {
		this.pdfPath = pdfPath;
	}
	
	
	

}
