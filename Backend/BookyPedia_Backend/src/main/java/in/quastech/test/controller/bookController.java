package in.quastech.test.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import in.quastech.test.entities.Book;
import in.quastech.test.impl.BookServiceImpl;
import jakarta.websocket.server.PathParam;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class bookController {

	@Autowired
	private BookServiceImpl bookServiceImpl;

	@PostMapping("/add-book")
	public ResponseEntity<Book> addBook(@ModelAttribute Book book,
			@RequestParam(value = "image", required = false) MultipartFile imageFile,
			@RequestParam(value = "file", required = false) MultipartFile pdfFile) {

		 Book savedBook = bookServiceImpl.addBook(book, imageFile, pdfFile);
	        return ResponseEntity.status(HttpStatus.CREATED).body(savedBook);
	}

//	@CrossOrigin(origins = "http://localhost:5173")
	@GetMapping("/ebooks/{id}")
	public Optional<Book> getBookById(@PathVariable int id) {
		return bookServiceImpl.getBookById(id);
	}

//	@CrossOrigin(origins = "http://localhost:5173")
	@GetMapping("/ebooks")
	public List<Book> getAllBooks() {
		return bookServiceImpl.getAllBooks();
	}

	@DeleteMapping("/ebooks/{id}")
	public ResponseEntity<String> deleteBook(@PathVariable int id) {
		bookServiceImpl.deleteBookById(id);
		return ResponseEntity.ok("Book deleted successfully.");
	}

//	can i
//	use responsebody
//	instead of
//	modelAsstribute
//
//
//	ChatGPT said:Yes,
//	you can use
//	@RequestBody instead of @ModelAttribute, but only if you're not
//
//	uploading files (e.g., image or PDF) with the request.

	@PutMapping("/update-book/{id}")

	public ResponseEntity<String> updateBook(@PathVariable int id, @ModelAttribute Book book,
			@RequestParam(value = "image", required = false) MultipartFile image,
			@RequestParam(value = "file", required = false) MultipartFile file) {

		try {
	        bookServiceImpl.updateBook(id, book, image, file);
	        return ResponseEntity.ok("Book updated successfully.");
	    } catch (Exception e) {
	        e.printStackTrace();
	        return ResponseEntity.status(500).body("Update failed: " + e.getMessage());
	    }
//		 Book updated = bookServiceImpl.updateBook(id, book, image, file);
//		    return ResponseEntity.ok(updated);
	}

	@GetMapping("/hello")
	public String hello() {
		return "hello";
	}
}
