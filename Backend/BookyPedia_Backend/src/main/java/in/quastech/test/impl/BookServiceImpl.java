package in.quastech.test.impl;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import in.quastech.test.entities.Book;
import in.quastech.test.repository.BookRepository;
import in.quastech.test.service.bookService;

@Service
public class BookServiceImpl implements bookService {

	@Autowired
	private BookRepository bookRepo;

	@Override
	public Book addBook(Book book,MultipartFile image, MultipartFile file) {
//		return bookRepo.save(book);
		if (image != null && !image.isEmpty()) {
            String imagePath = saveFile(image, "images");
            book.setImagePath(imagePath);
        }

        if (file != null && !file.isEmpty()) {
            if (!file.getContentType().equals("application/pdf")) {
                throw new RuntimeException("Only PDF files are allowed");
            }
            String pdfPath = saveFile(file, "pdfs");
            book.setPdfPath(pdfPath);
        }

        return bookRepo.save(book);

	}
	
	private String saveFile(MultipartFile file, String folderName) {
	    try {
	        String uploadDir = System.getProperty("user.dir") + File.separator + "uploads" + File.separator + folderName + File.separator;
	        File uploadPath = new File(uploadDir);
	        if (!uploadPath.exists()) {
	            uploadPath.mkdirs();
	        }

	        String fileName = file.getOriginalFilename();
	        String filePath = uploadDir + fileName;
	        file.transferTo(new File(filePath));

	        // Return a relative path (you can change this based on your frontend's access path)
	        return "/uploads/" + folderName + "/" + fileName;

	    } catch (IOException e) {
	        throw new RuntimeException("Failed to save file: " + e.getMessage());
	    }
	}

	@Override
	public Book updateBook(int id, Book updatedBook, MultipartFile image, MultipartFile file) {
		// TODO Auto-generated method stub
		
		 Book existingBook =bookRepo.findById(id).orElseThrow(() -> new RuntimeException("Book not found"));
		
		        existingBook.setName(updatedBook.getName());
		        existingBook.setAuthor(updatedBook.getAuthor());
		        existingBook.setPublisher(updatedBook.getPublisher());
		        existingBook.setDateOfPublish(updatedBook.getDateOfPublish());
		        existingBook.setCategory(updatedBook.getCategory());
		        existingBook.setDescription(updatedBook.getDescription());
		        existingBook.setPrice(updatedBook.getPrice());
		        existingBook.setRatings(updatedBook.getRatings());
		        existingBook.setPages(updatedBook.getPages());
		        existingBook.setLanguage(updatedBook.getLanguage());
//		        existingBook.setImagePath(image);

//		        // Optional: update file/image paths only if new ones are provided
//		        if (updatedBook.getImagePath() != null) {
//		            existingBook.setImagePath(updatedBook.getImagePath());
//		        }
		        if (image != null && !image.isEmpty()) {
		            String imagePath = saveFile(image, "images");
		            existingBook.setImagePath(imagePath);
		        }

		        if (file != null && !file.isEmpty()) {
		            if (!file.getContentType().equals("application/pdf")) {
		                throw new RuntimeException("Uploaded file is not a PDF");
		            }
		            String pdfPath = saveFile(file, "pdfs");
		            existingBook.setPdfPath(pdfPath);
		        }
		        return bookRepo.save(existingBook);
		    
	}

	@Override
	public void deleteBookById(int id) {
		// TODO Auto-generated method stub
		bookRepo.deleteById(id);
	}

	@Override
	public List<Book> getAllBooks() {
		// TODO Auto-generated method stub
		return bookRepo.findAll();
		
	}

	@Override
	public Optional<Book> getBookById(int id) {
		return bookRepo.findById(id);
		
	}



}
