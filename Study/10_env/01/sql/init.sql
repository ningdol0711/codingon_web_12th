mysql -uroot -p
SELECT user FROM mysql.user;
CREATE USER 'user12'@'%' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON *.* TO 'user12'@'%' WITH GRANT OPTION;
-- 모든 DB에 접근 가능하도록
-- sesac 계정에 DB 권한 부여
-- 실제로 DB에서 접근할 때 사용할 계정을 만들어주는 것
FLUSH PRIVILEGES;