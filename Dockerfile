FROM 10.122.163.225:5000/nginx:1.21.6
MAINTAINER @DUOQIANG
# 创建根目录
WORKDIR /usr/share/nginx/ui
# nginx日志文件
WORKDIR /etc/nginx/logs
# 拷贝构建文件
COPY ./dist/ /usr/share/nginx/ui/
# 修改权限
RUN  chmod -R 777 /usr/share/nginx/ui
# 删除默认的config位置文件
RUN rm -rf /etc/nginx/conf.d/*

# nginx配置文件
COPY nginx.template /etc/nginx/nginx.template
ENV APIIP  10.28.89.10:8765
ENV DMPP  11.11.141.49:9717
CMD envsubst '$APIIP,$DMPP' < /etc/nginx/nginx.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'

# 拷贝配置文件到容器
# COPY nginx.conf /etc/nginx/nginx.conf
# 镜像导出端口
EXPOSE 80
