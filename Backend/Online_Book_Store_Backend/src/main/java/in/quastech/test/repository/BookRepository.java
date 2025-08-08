package in.quastech.test.repository;

import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;

import in.quastech.test.entities.Book;

public interface BookRepository extends JpaRepository<Book, Integer>{

}
