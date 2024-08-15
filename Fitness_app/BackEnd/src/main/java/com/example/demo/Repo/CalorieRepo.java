package com.example.demo.Repo;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Model.Calorie;

public interface CalorieRepo extends JpaRepository<Calorie,Long> {
}
