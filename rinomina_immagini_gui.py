import os
import tkinter as tk
from tkinter import filedialog, messagebox

def rinomina_immagini():
    folder_path = entry_path.get()
    if not folder_path or not os.path.isdir(folder_path):
        messagebox.showerror("Errore", "Seleziona una cartella valida!")
        return

    # Filtra solo i file immagine comuni
    files = [f for f in os.listdir(folder_path) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    files.sort() # Ordina alfabeticamente per avere un ordine coerente

    if not files:
        messagebox.showwarning("Attenzione", "Nessuna immagine trovata nella cartella.")
        return

    for index, filename in enumerate(files, start=1):
        extension = os.path.splitext(filename)[1]
        new_name = f"{index}{extension}"
        
        old_file = os.path.join(folder_path, filename)
        new_file = os.path.join(folder_path, new_name)
        
        os.rename(old_file, new_file)
    
    messagebox.showinfo("Successo", f"Rinominati {len(files)} file con successo!")

# Configurazione GUI
root = tk.Tk()
root.title("Rinomina Immagini Progetti")
root.geometry("400x150")

tk.Label(root, text="Seleziona cartella immagini:").pack(pady=10)
entry_path = tk.Entry(root, width=50)
entry_path.pack(pady=5)

btn_browse = tk.Button(root, text="Sfoglia", command=lambda: entry_path.insert(0, filedialog.askdirectory()))
btn_browse.pack()

btn_rename = tk.Button(root, text="Rinomina in sequenza", command=rinomina_immagini, bg="blue", fg="white")
btn_rename.pack(pady=20)

root.mainloop()