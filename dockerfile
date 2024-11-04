# Dockerfile
# ใช้ Node.js เป็นฐาน
FROM node:16

# ตั้งค่า working directory
WORKDIR /app

# คัดลอก package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดทั้งหมดไปยัง working directory
COPY . .

# สร้างโปรเจ็กต์สำหรับการผลิต
RUN npm run build

# ใช้ nginx เพื่อเสิร์ฟแอป
FROM nginx:alpine

# คัดลอกไฟล์ build ไปยัง nginx
COPY --from=0 /app/build /usr/share/nginx/html

# เปิด port 80
EXPOSE 80

# เริ่ม nginx
CMD ["nginx", "-g", "daemon off;"]
