// CustomizationForm.tsx
import React from 'react';

interface CustomizationFormProps {
    widgetColor: string;
    setWidgetColor: React.Dispatch<React.SetStateAction<string>>;
    widgetPosition: string;
    setWidgetPosition: React.Dispatch<React.SetStateAction<string>>;
    widgetMessage: string;
    setWidgetMessage: React.Dispatch<React.SetStateAction<string>>;
}

const CustomizationForm: React.FC<CustomizationFormProps> = ({
    widgetColor,
    setWidgetColor,
    widgetPosition,
    setWidgetPosition,
    widgetMessage,
    setWidgetMessage,
}) => {
    return (
        <div>
            <div>
                <label htmlFor="widgetColor">Widget Color</label>
                <input
                    type="color"
                    id="widgetColor"
                    value={widgetColor}
                    onChange={(e) => setWidgetColor(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="widgetPosition">Widget Position</label>
                <select
                    id="widgetPosition"
                    value={widgetPosition}
                    onChange={(e) => setWidgetPosition(e.target.value)}
                >
                    <option value="bottom-right">Bottom-right</option>
                    <option value="bottom-left">Bottom-left</option>
                    <option value="top-right">Top-right</option>
                    <option value="top-left">Top-left</option>
                </select>
            </div>

            <div>
                <label htmlFor="widgetMessage">Welcome Message</label>
                <input
                    type="text"
                    id="widgetMessage"
                    value={widgetMessage}
                    onChange={(e) => setWidgetMessage(e.target.value)}
                />
            </div>
        </div>
    );
};

export default CustomizationForm;
