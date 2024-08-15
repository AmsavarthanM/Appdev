package com.example.demo.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

// import com.example.demo.Model.Calorie;
import com.example.demo.Model.User;
// import com.example.demo.Model.Work;
import com.example.demo.Repo.CalorieRepo;
import com.example.demo.Repo.UserRepo;

@Service
public class UserService {
    
    @Autowired
    UserRepo repo;

    @Autowired
    CalorieRepo cr;

    public User adduser(User u)
    {
        return repo.save(u);
    }

    public List<User> getusers()
    {
         return repo.findAll();
    }
    public ResponseEntity<User> findUserByEmail(String email)
    {
        User ab = repo.findByEmail(email);
        return new ResponseEntity<User>(ab,HttpStatus.OK);
    }

    public ResponseEntity<User> getuser(String email,String password){
        User aa = repo.findByEmailAndPassword(email, password);
        System.out.println(aa.getEmail());
        if(aa == null)
        {
            return new ResponseEntity<User>(aa,HttpStatus.CONFLICT);
        }
        return new ResponseEntity<User>(aa,HttpStatus.OK);
        
    }


    

}
