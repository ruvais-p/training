import os
from PIL import Image

def batch_convert_to_webp(input_folder, quality=80):
    if not os.path.isdir(input_folder):
        print("❌ Invalid directory")
        return

    for filename in os.listdir(input_folder):
        input_path = os.path.join(input_folder, filename)

        # Skip non-files and already converted files
        if not os.path.isfile(input_path) or filename.lower().endswith(".webp"):
            continue

        try:
            with Image.open(input_path) as img:
                base_name = os.path.splitext(filename)[0]
                output_path = os.path.join(input_folder, f"{base_name}.webp")

                if img.mode in ("RGBA", "LA"):
                    img.save(output_path, "WEBP", quality=quality)
                else:
                    img.convert("RGB").save(output_path, "WEBP", quality=quality)

                print(f"✅ {filename} → {base_name}.webp")

        except Exception as e:
            print(f"❌ Skipped {filename}: {e}")


# 🔥 Take folder path from user
folder_path = input("📂 Enter folder path: ").strip()

# Run conversion
batch_convert_to_webp(folder_path)