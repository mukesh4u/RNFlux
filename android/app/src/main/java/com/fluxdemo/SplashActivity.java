package com.fluxdemo;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      setContentView(R.layout.launch_screen);

    Handler handler = new Handler();
     Runnable r = new Runnable() {
          @Override
          public void run() {
           Intent intent = new Intent(SplashActivity.this,MainActivity.class);
           startActivity(intent);
          }
      };
      handler.postDelayed(r,1500);
  }
}