package com.example.demo.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Model.User;
import com.example.demo.Model.Work;
import com.example.demo.Service.UserService;
import com.example.demo.Service.WorkService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class UserController {

    @Autowired
    UserService service;

    @Autowired
    WorkService ws;

    @CrossOrigin(origins = "http://localhost:3000")
   @PostMapping("/post")
   public User postMethodName(@RequestBody User u) {
       
       return service.adduser(u);
   }

   @GetMapping("/getall")
   public List<User> getMethodName() {
       return service.getusers();
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/get/{email}/{password}")
    public ResponseEntity<User> getMethodName(@PathVariable String email,@PathVariable String password) {
        return service.getuser(email, password);
    }

    // @PostMapping("/addcal")
    // public Calorie postMethodName(@RequestBody Calorie c) {
        
    //     return service.addcal(c);
    // }
    
    @CrossOrigin("http://localhost:3000")
    @PostMapping("/addwork")
    public Work postMethodName1(@RequestBody Work w) {
        return ws.addw(w);
    }
    
    
//     @CrossOrigin("http://localhost:3000")
//     @PutMapping("/user/{email}")
// public ResponseEntity<User> updateUser(@PathVariable String email, @RequestBody User updatedUser) {
//     Optional<User> userOptional = service.findUserByEmail(email);
//     if (userOptional.isPresent()) {
//         User user = userOptional.get();
//         // user.setName(updatedUser.getUserName());
//         user.setEmail(updatedUser.getEmail()); // Update email
//         user.setPassword(updatedUser.getPassword());
//         // Do not set phone field
//         User updated = service.adduser(user);
//         return ResponseEntity.ok(updated);
//     } else {
//         return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // 404 Not Found
// }
    


}