package com.example.demo.Repo;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Model.User;


public interface UserRepo extends JpaRepository<User,Integer> {

    User findByEmailAndPassword(String email, String password);
    User findByEmail(String email);

} 