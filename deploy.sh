#! /bin/bash

mv dist blog
scp -r ./blog root@aliyun:/usr/local/nginx/html