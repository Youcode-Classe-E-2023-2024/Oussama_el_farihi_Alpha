-- Création de la table 'Utilisateurs'
CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    reset_token VARCHAR(255),
    reset_token_expires DATETIME
);

-- Création de la table 'Notifications'
CREATE TABLE notifications (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    notification_content TEXT,
    is_read BOOLEAN DEFAULT FALSE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Utilisateurs(user_id)
);

-- Création de la table 'password reset'
CREATE TABLE pwdreset (
  pwdResetID int(11) NOT NULL,
  pwdResetEmail text NOT NULL,
  pwdResetSelector text NOT NULL,
  pwdResetToken longtext NOT NULL,
  pwdResetExpires int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;