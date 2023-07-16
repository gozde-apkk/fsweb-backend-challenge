CREATE TABLE `likes`(
    `like_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `tweet_id` BIGINT NOT NULL,
    `comment_id` BIGINT NOT NULL
);
CREATE TABLE `users`(
    `user_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(255) NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL
);
CREATE TABLE `tweets`(
    `tweet_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `content` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL
);
CREATE TABLE `retweets`(
    `retweet_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `tweet_id` BIGINT NOT NULL
);
CREATE TABLE `comments`(
    `comment_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `tweet_id` BIGINT NOT NULL,
    `comment` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL
);
ALTER TABLE
    `likes` ADD CONSTRAINT `likes_comment_id_foreign` FOREIGN KEY(`comment_id`) REFERENCES `comments`(`comment_id`);
ALTER TABLE
    `likes` ADD CONSTRAINT `likes_tweet_id_foreign` FOREIGN KEY(`tweet_id`) REFERENCES `tweets`(`tweet_id`);
ALTER TABLE
    `retweets` ADD CONSTRAINT `retweets_tweet_id_foreign` FOREIGN KEY(`tweet_id`) REFERENCES `tweets`(`tweet_id`);
ALTER TABLE
    `comments` ADD CONSTRAINT `comments_tweet_id_foreign` FOREIGN KEY(`tweet_id`) REFERENCES `tweets`(`tweet_id`);
ALTER TABLE
    `retweets` ADD CONSTRAINT `retweets_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`user_id`);
ALTER TABLE
    `comments` ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`user_id`);
ALTER TABLE
    `tweets` ADD CONSTRAINT `tweets_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`user_id`);
ALTER TABLE
    `likes` ADD CONSTRAINT `likes_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`user_id`);