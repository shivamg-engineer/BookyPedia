package in.quastech.test.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
	public String addBook(@ModelAttribute Book book, @RequestParam("image") MultipartFile imageFile) {
		try {
			if (!imageFile.isEmpty()) {
				// ✅ Set upload directory inside your project root
				String uploadDir = System.getProperty("user.dir") + File.separator + "uploads" + File.separator;

				File uploadPath = new File(uploadDir);
				if (!uploadPath.exists()) {
					uploadPath.mkdirs(); // Create the directory if not exists
				}

				// ✅ Save the file
				String fileName = imageFile.getOriginalFilename();
				String filePath = uploadDir + fileName;

				imageFile.transferTo(new File(filePath));

				// ✅ Set the relative image path to the book (for DB)
				book.setImagePath("/uploads/" + fileName);
			}

			// ✅ Save book with imagePath set
			bookServiceImpl.addBook(book);

			return "Book added successfully!";
		} catch (IOException e) {
			e.printStackTrace();
			return "Image upload failed!";
		}

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

	public ResponseEntity<Book> updateBook(@PathVariable int id,@ModelAttribute Book book,@RequestParam(value="image",required=false) MultipartFile image,
	        @RequestParam(value="file", required=false) MultipartFile file) {
		 Book updated = bookServiceImpl.updateBook(id, book);
		    return ResponseEntity.ok(updated);
	}

	@GetMapping("/hello")
	public String hello() {
		return "hello";
	}
}
