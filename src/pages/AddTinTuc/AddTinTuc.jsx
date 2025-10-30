import axios from '@/api/axiosConfig';
import { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from 'react-toastify';
import { assets } from '@/assets/assets';

function AddTinTuc() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = 'Thêm tin tức - Bean Farm';
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('category', category);
            formData.append('content', content);
            formData.append('date', date);
            formData.append('image', image);

            const response = await axios.post('/api/v1/admin/TinTuc/add', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.data.success) {
                toast.success('Thêm tin tức thành công');
                setName('');
                setCategory('');
                setContent('');
                setDate('');
                setImage(false);
            } else {
                toast.error('Something went wrong');
            }
        } catch (error) {
            toast.error('Error occurred');
        }

        setLoading(false);
    };

    function CustomUploadAdapterPlugin(editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return {
                upload: () =>
                    loader.file.then(async (file) => {
                        const formData = new FormData();
                        formData.append('image', file);

                        try {
                            const res = await axios.post('/api/v1/admin/upload-image', formData, {
                                headers: { 'Content-Type': 'multipart/form-data' },
                            });

                            return { default: res.data.url };
                        } catch (error) {
                            console.error('Lỗi upload ảnh:', error);
                            return Promise.reject(error);
                        }
                    }),
            };
        };
    }

    return loading ? (
        <div className="grid place-items-center min-h-[80vh]">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-green-600 rounded-full animate-spin"></div>
        </div>
    ) : (
        <>
            {localStorage.getItem('token') && localStorage.getItem('role') === 'admin' ? (
                <div className="flex justify-center py-10 px-4">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8 flex flex-col gap-6"
                    >
                        <h2 className="text-2xl font-semibold text-gray-700 border-b pb-3">➕ Thêm tin tức mới</h2>

                        {/* Upload hình ảnh */}
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-gray-700">Hình ảnh</label>
                            <input
                                onChange={(e) => setImage(e.target.files[0])}
                                type="file"
                                id="image"
                                accept="image/*"
                                hidden
                            />
                            <label
                                htmlFor="image"
                                className="cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center hover:bg-gray-50 transition"
                            >
                                <img
                                    className="w-32 h-24 object-cover rounded-md"
                                    src={image ? URL.createObjectURL(image) : assets.upload_area}
                                    alt=""
                                />
                            </label>
                        </div>

                        {/* Tiêu đề */}
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-gray-700">Tiêu đề</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border border-gray-300 rounded-lg p-3 outline-primary-brown"
                                placeholder="Nhập tiêu đề tin tức"
                                type="text"
                            />
                        </div>

                        {/* Danh mục */}
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-gray-700">Danh mục</label>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="border border-gray-300 rounded-lg p-3 outline-primary-brown"
                                placeholder="Nhập danh mục"
                                type="text"
                            />
                        </div>

                        {/* Nội dung */}
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-gray-700">Mô tả</label>
                            <CKEditor
                                editor={ClassicEditor}
                                data={content}
                                config={{
                                    extraPlugins: [CustomUploadAdapterPlugin],
                                    toolbar: [
                                        'heading',
                                        '|',
                                        'bold',
                                        'italic',
                                        'underline',
                                        'link',
                                        '|',
                                        'bulletedList',
                                        'numberedList',
                                        'blockQuote',
                                        'insertTable',
                                        '|',
                                        'imageUpload',
                                        '|',
                                        'undo',
                                        'redo',
                                    ],
                                }}
                                onChange={(event, editor) => setContent(editor.getData())}
                            />
                        </div>

                        {/* Thời gian */}
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-gray-700">Thời gian</label>
                            <input
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="border border-gray-300 rounded-lg p-3 outline-primary-brown"
                                placeholder="dd/mm/yyyy"
                                type="text"
                            />
                        </div>

                        {/* Nút submit */}
                        <button
                            type="submit"
                            className="bg-primary-green text-white font-medium py-3 px-6 rounded-lg shadow-md transition hover:bg-primary-yellow hover:text-black duration-300"
                        >
                            Thêm tin tức
                        </button>
                    </form>
                </div>
            ) : null}
        </>
    );
}

export default AddTinTuc;
