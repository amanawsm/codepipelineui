#!/usr/bin/env bash
sudo apt-get update
sudo apt-get install ruby
sudo apt-get install wget
cd /home/ubuntu
wget https://hyla-root.s3.us-east-1.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
sudo service codedeploy-agent start
sudo apt-get install nginx -y
sudo systemctl start nginx


 

