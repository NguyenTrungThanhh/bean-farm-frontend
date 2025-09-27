export function timeAgo(dateString) {
    const now = new Date();
    const created = new Date(dateString);
    const diff = (now - created) / 1000; // giây

    if (diff < 60) return 'vài giây trước';
    if (diff < 3600) return `${Math.floor(diff / 60)} phút trước`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} giờ trước`;
    if (diff < 30 * 86400) return `${Math.floor(diff / 86400)} ngày trước`;

    return created.toLocaleDateString('vi-VN');
}
