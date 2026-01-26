#!/usr/bin/env python3
"""
SecurePass
A simple, secure password generation tool
"""

import random
import string
import tkinter as tk
from tkinter import messagebox, ttk
import os
import json
from datetime import datetime

class PasswordGenerator:
    def __init__(self, root):
        self.root = root
        self.root.title("SecurePass")
        self.root.geometry("500x600")
        self.root.configure(bg='#1a1a24')
        
        # Password history file
        self.history_file = os.path.join(os.path.expanduser("~"), "password_history.json")
        
        self.setup_ui()
        self.load_history()
    
    def setup_ui(self):
        # Title
        title_label = tk.Label(
            self.root, 
            text="🔒 SecurePass", 
            font=("Segoe UI", 18, "bold"),
            bg='#1a1a24',
            fg='#e4e4e7'
        )
        title_label.pack(pady=20)
        
        # Password length
        length_frame = tk.Frame(self.root, bg='#1a1a24')
        length_frame.pack(pady=10, padx=20, fill='x')
        
        tk.Label(length_frame, text="Password Length:", font=("Segoe UI", 12), 
                bg='#1a1a24', fg='#a1a1aa').pack(anchor='w')
        
        self.length_var = tk.IntVar(value=16)
        length_slider = ttk.Scale(
            length_frame, 
            from_=4, to=64, 
            variable=self.length_var,
            orient='horizontal'
        )
        length_slider.pack(fill='x', pady=5)
        
        self.length_label = tk.Label(
            length_frame, 
            text="16 characters", 
            font=("Segoe UI", 10),
            bg='#1a1a24', fg='#a1a1aa'
        )
        self.length_label.pack(anchor='e')
        
        # Character options
        options_frame = tk.Frame(self.root, bg='#1a1a24')
        options_frame.pack(pady=10, padx=20, fill='x')
        
        tk.Label(options_frame, text="Character Types:", font=("Segoe UI", 12), 
                bg='#1a1a24', fg='#a1a1aa').pack(anchor='w', pady=(0,10))
        
        self.uppercase_var = tk.BooleanVar(value=True)
        self.lowercase_var = tk.BooleanVar(value=True)
        self.numbers_var = tk.BooleanVar(value=True)
        self.symbols_var = tk.BooleanVar(value=True)
        
        options = [
            ("Uppercase Letters (A-Z)", self.uppercase_var),
            ("Lowercase Letters (a-z)", self.lowercase_var),
            ("Numbers (0-9)", self.numbers_var),
            ("Symbols (!@#$%)", self.symbols_var)
        ]
        
        for text, var in options:
            cb = tk.Checkbutton(
                options_frame, 
                text=text, 
                variable=var,
                font=("Segoe UI", 11),
                bg='#1a1a24',
                fg='#e4e4e7',
                selectcolor='#1a1a24',
                activebackground='#1a1a24'
            )
            cb.pack(anchor='w', pady=2)
        
        # Generate button
        generate_btn = tk.Button(
            self.root,
            text="Generate Password",
            command=self.generate_password,
            font=("Segoe UI", 12, "bold"),
            bg='#6366f1',
            fg='white',
            relief='flat',
            padx=20,
            pady=10
        )
        generate_btn.pack(pady=20)
        
        # Password display
        password_frame = tk.Frame(self.root, bg='#1a1a24')
        password_frame.pack(pady=10, padx=20, fill='x')
        
        tk.Label(password_frame, text="Generated Password:", font=("Segoe UI", 12), 
                bg='#1a1a24', fg='#a1a1aa').pack(anchor='w')
        
        self.password_var = tk.StringVar()
        password_entry = tk.Entry(
            password_frame,
            textvariable=self.password_var,
            font=("Consolas", 14),
            bg='#0f0f15',
            fg='#e4e4e7',
            relief='solid',
            bd=2,
            state='readonly'
        )
        password_entry.pack(fill='x', pady=5)
        
        # Action buttons
        actions_frame = tk.Frame(self.root, bg='#1a1a24')
        actions_frame.pack(pady=10, padx=20, fill='x')
        
        copy_btn = tk.Button(
            actions_frame,
            text="📋 Copy to Clipboard",
            command=self.copy_to_clipboard,
            font=("Segoe UI", 10),
            bg='#22c55e',
            fg='white',
            relief='flat',
            padx=10,
            pady=5
        )
        copy_btn.pack(side='left', padx=(0,10))
        
        save_btn = tk.Button(
            actions_frame,
            text="💾 Save Password",
            command=self.save_password,
            font=("Segoe UI", 10),
            bg='#f59e0b',
            fg='white',
            relief='flat',
            padx=10,
            pady=5
        )
        save_btn.pack(side='left')
        
        # Password history
        history_frame = tk.Frame(self.root, bg='#1a1a24')
        history_frame.pack(pady=20, padx=20, fill='both', expand=True)
        
        tk.Label(history_frame, text="Password History:", font=("Segoe UI", 12), 
                bg='#1a1a24', fg='#a1a1aa').pack(anchor='w')
        
        self.history_listbox = tk.Listbox(
            history_frame,
            font=("Consolas", 10),
            bg='#0f0f15',
            fg='#e4e4e7',
            relief='solid',
            bd=2,
            height=8
        )
        self.history_listbox.pack(fill='both', expand=True, pady=5)
        
        # Update length label
        self.length_var.trace('w', self.update_length_label)
    
    def update_length_label(self, *args):
        self.length_label.config(text=f"{self.length_var.get()} characters")
    
    def generate_password(self):
        length = self.length_var.get()
        chars = ""
        
        if self.uppercase_var.get():
            chars += string.ascii_uppercase
        if self.lowercase_var.get():
            chars += string.ascii_lowercase
        if self.numbers_var.get():
            chars += string.digits
        if self.symbols_var.get():
            chars += "!@#$%^&*()_+-=[]{}|;:,.<>?"
        
        if not chars:
            messagebox.showwarning("Warning", "Please select at least one character type!")
            return
        
        password = ''.join(random.choice(chars) for _ in range(length))
        self.password_var.set(password)
    
    def copy_to_clipboard(self):
        password = self.password_var.get()
        if password:
            self.root.clipboard_clear()
            self.root.clipboard_append(password)
            self.root.update()
            messagebox.showinfo("Copied", "Password copied to clipboard!")
    
    def save_password(self):
        password = self.password_var.get()
        if not password:
            messagebox.showwarning("Warning", "No password to save!")
            return
        
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        entry = {"password": password, "timestamp": timestamp}
        
        # Load existing history
        history = self.load_history()
        history.append(entry)
        
        # Keep only last 50 entries
        if len(history) > 50:
            history = history[-50:]
        
        # Save history
        try:
            with open(self.history_file, 'w') as f:
                json.dump(history, f, indent=2)
            self.update_history_display()
            messagebox.showinfo("Saved", "Password saved to history!")
        except Exception as e:
            messagebox.showerror("Error", f"Failed to save password: {e}")
    
    def load_history(self):
        try:
            if os.path.exists(self.history_file):
                with open(self.history_file, 'r') as f:
                    return json.load(f)
        except:
            pass
        return []
    
    def update_history_display(self):
        self.history_listbox.delete(0, tk.END)
        history = self.load_history()
        
        for entry in reversed(history[-10:]):  # Show last 10 entries
            display_text = f"{entry['timestamp']} - {entry['password'][:20]}{'...' if len(entry['password']) > 20 else ''}"
            self.history_listbox.insert(tk.END, display_text)

if __name__ == "__main__":
    root = tk.Tk()
    app = PasswordGenerator(root)
    root.mainloop()