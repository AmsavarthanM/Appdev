package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Work;
import com.example.demo.Repo.WorkRepo;

@Service
public class WorkService {
    
    @Autowired
    WorkRepo wr;

    public Work addw(Work w)
    {
        return wr.save(w);
    } 
}
